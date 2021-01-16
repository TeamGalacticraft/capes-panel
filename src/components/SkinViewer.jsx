import React, { Component } from "react";
import PropTypes from "prop-types";
import * as skinview3d from "skinview3d";
export default class SkinViewer extends Component {
  constructor(props) {
    super(props);
    this.skinviewRef = React.createRef();
    this.state = {
      viewer: null,
    };
  }

  componentDidMount() {
    this.setState(
      {
        viewer: new skinview3d.SkinViewer({
          canvas: this.skinviewRef.current,
          width: this.props.width,
          height: this.props.height,
        }),
      },
      () => {
        //const { viewer } = this.state;
        // const { config } = this.props;

        this.initializeProps();
      }
    );
  }

  componentWillUnmount() {
    this.state.viewer.renderer.forceContextLoss();
  }

  componentDidUpdate(prevProps) {
    const { viewer } = this.state;

    if (prevProps.skinUrl !== this.props.skinUrl) {
      viewer.skinUrl = this.props.skinUrl;
    }

    if (prevProps.capeUrl !== this.props.capeUrl) {
      viewer.capeUrl = this.props.capeUrl;
      if (this.props.capeUrl === "") {
        viewer.loadCape(null);
      } else {
        viewer.loadCape(this.props.capeUrl);
      }
    }

    if (prevProps.elytra !== this.props.elytra) {
      if (this.props.capeUrl !== "") {
        if (this.props.elytra) {
          viewer.loadCape(this.props.capeUrl, { backEquipment: "elytra" });
        } else {
          viewer.loadCape(this.props.capeUrl);
        }
      }
    }

    if (
      prevProps.width !== this.props.width ||
      prevProps.height !== this.props.height
    ) {
      viewer.setSize(this.props.width, this.props.height);
    }
  }

  initializeProps() {
    const { viewer } = this.state;
    let { skinUrl, capeUrl, enableOrbitControls, onReady, config } = this.props;

    // if config is set override the other props
    if (config) {
      skinUrl = config.skinUrl;
      capeUrl = config.capeUrl;
      enableOrbitControls = config.enableOrbitControls;
    }

    // load skin
    viewer.loadSkin(skinUrl);

    // load cape
    viewer.loadCape(capeUrl);

    if (enableOrbitControls) {
      const control = skinview3d.createOrbitControls(viewer);
      control.enableRotate = true;
      control.enableZoom = false;
      control.enablePan = false;
    }

    // let's call ready here
    onReady(viewer);
  }

  render() {
    return (
      <canvas
        className={this.props.className}
        ref={this.skinviewRef}
        style={{ imageRendering: "pixelated" }}
      />
    );
  }
}

SkinViewer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  skinUrl: PropTypes.string.isRequired,
  capeUrl: PropTypes.string,
  enableOrbitControls: PropTypes.bool,
  className: PropTypes.string,
  onReady: PropTypes.func,
  elytra: PropTypes.bool,
  config: PropTypes.object,
};

// Specifies the default values for props:
SkinViewer.defaultProps = {
  width: 600,
  height: 600,
  enableOrbitControls: true, // Allows for a bit more control
  onReady: () => {},
  config: null,
  elytra: false,
};
