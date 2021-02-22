import React from 'react';
import * as THREE from 'three';

class ThreeScene extends React.Component {
    
    mount = React.createRef<HTMLDivElement>();
    scene!: THREE.Scene ;
    camera!: THREE.PerspectiveCamera;
    renderer!: THREE.WebGLRenderer;
    cube!: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
    frameId!: number;
    
    componentDidMount()
    {
        const width = this.mount?.current?.clientWidth;
        const height = this.mount?.current?.clientHeight;
        
        if(width && height)
        {
            //ADD SCENE
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(
                75,
                width / height,
                0.1,
                1000
            );
            this.camera.position.z = 4;
            //ADD RENDERER
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setClearColor('#000000');
            this.renderer.setSize(width, height);
            this.mount?.current?.appendChild(this.renderer.domElement);
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: '#433F81'});
            this.cube = new THREE.Mesh(geometry, material);
            this.scene.add(this.cube);
            this.start();
        }

    }
    start = () => {
        if(!this.frameId)
        {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    animate = () => {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render(){
        return(
          <div
            style={{ width: '1920px', height: '1080px' }}
            ref={this.mount}
          />
        )
    }
}

export default ThreeScene;