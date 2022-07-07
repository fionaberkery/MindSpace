import React, { Component } from "react";
import Bubblepop from "./BubblePop";

class BubbleStage extends Component{
    constructor (props){
        super(props);

        this.state = {
            bubbleCount: 50,
            popped: 0,
            ready: false
        };

        this.getRandomPosition = this.getRandomPosition.bind(this);
        this.popBubble = this.popBubble.bind(this);
        this.animateBubble = this.animateBubble.bind(this);
        this.renderBubbles = this.renderBubbles.bind(this);
        this.ready = this.ready.bind(this);
        this.init = this.init.bind(this);
    }

    componentDidUpdate(){
        if (this.state.popped <1){
            this.init();
        }
    }
    
    init()
}