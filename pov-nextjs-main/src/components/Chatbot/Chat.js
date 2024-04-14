import React, { Component } from 'react';

class Chat extends Component {
  componentDidMount() {
    (function(d, m){
      var kommunicateSettings = {
        "appId": "1f370696e0619716ec43ab7d922829869",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true
      };
      var s = d.createElement("script"); 
      s.type = "text/javascript"; 
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = d.getElementsByTagName("head")[0]; 
      h.appendChild(s);
      window.kommunicate = m; 
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return null; // Since Kommunicate widget renders its own UI, return null here
  }
}

export default Chat;
