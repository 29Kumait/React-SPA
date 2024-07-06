import PropTypes from "prop-types";

const IframeComponent = ({ url }) => {
  return (
    <div style={{ width: "auto", height: "79vh", border: "1px solid black" }}>
      <iframe
        src={url}
        title="Embedded Page"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

IframeComponent.propTypes = {
  url: PropTypes.string.isRequired,
};

export default IframeComponent;
