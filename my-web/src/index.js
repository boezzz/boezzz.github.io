import 'aframe';
import 'aframe-html-shader';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  showEmail() {
    var username = ["z", "b", "y", "2", "0", "0", "3"];
    var domain = ["u", "w", ".", "e", "d", "u"];

    // Obfuscate the email address
    var obfuscatedEmail = "";
    for (var i = 0; i < username.length; i++) {
      obfuscatedEmail += username[i];
    }
    obfuscatedEmail += "@";
    for (var i = 0; i < domain.length; i++) {
      obfuscatedEmail += domain[i];
    }
    return obfuscatedEmail;
  }

  render () {

    const email = "In the mean time, you can reach out to me directly via " + this.showEmail();

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
          <a-asset-item id="avo" src="/asset/Avocado.gltf"></a-asset-item>
          <a-asset-item id="ladder" src="/asset/scene.gltf"></a-asset-item>
          
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>

        

        <a-entity position="0 0 0" rotation="0 0 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000">
        <Entity gltf-model="#avo" position={{x: 0, y: 1, z: -2}} scale="20 20 20" animation="property: rotation; to: 0 360 0; loop: true; dur: 2500"></Entity>
        </a-entity>

        <a-entity position="0 0 0" rotation="0 0 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000">
        <Entity gltf-model="#avo" position={{x: 0, y: 1, z: 2}} scale="20 20 20" animation="property: rotation; to: 0 360 0; loop: true; dur: 2500"></Entity>
        </a-entity>

        <Entity gltf-model="#ladder" rotation="0 25 0"position={{x: -0.5, y: 2, z: -3}} scale="0.01 0.01 0.01"></Entity>
        <Entity primitive="a-sphere" position={{x: -0.8, y: 1, z: -3.8}} radius="1" wireframe="true"></Entity>
        <Entity primitive="a-box" position={{x: 1, y: 0.7, z: -3.8}} rotation="0 60 0" wireframe="true"></Entity>



        <Entity text="font: aileronsemibold; value: Hello, My name is Boyang. You can call me Boe." position={{x: 0, y: 2, z: -1}}></Entity>
        <Entity text="font: mozillavr; value: This site is under construction.; color: red" position={{x: 0, y: 1.9, z: -1}}></Entity>
        <a-text value={email} font="mozillavr" scale="0.2 0.2 0.2"negate="false" position="-0.5 1.8 -1"></a-text>


      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));