import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { COLORS } from '../../utils/config';
import Header from './header';
import './animate.css'

import activeImg from '../../asset/chip_active_img.png'
import doneImg from '../../asset/chip_done_img.png'

const animateDuration = 1000;

class Home extends Component {
    animatedStyle = `${css(styles.leftImage)} css-animate-img`
    normalStyle = css(styles.leftImage)
    timeout = undefined;
    state = {
        isActive: false,
        leftImageStyle: this.normalStyle
    }

    _toggle = () => {
        if (this.timeout) {
            return;
        }
        this.setState({ isActive: !this.state.isActive, leftImageStyle: this.animatedStyle })
        this.timeout = setTimeout(this._resetStyle, animateDuration)
    }

    _resetStyle = () => {
        this.setState({ leftImageStyle: this.normalStyle }, () => this.timeout = undefined)
    }

    render() {
        const leftImageSrc = this.state.isActive ? activeImg : doneImg;
        return (
            <div className={css(styles.container)}>
                <Header />
                <div className={css(styles.content)}>
                    <div className={css(styles.leftContent)}>
                        <img className={this.state.leftImageStyle} src={leftImageSrc} />
                    </div>
                    <div className={css(styles.rightContent)}>
                        <div className={css(styles.row)}>
                            <LineComponent />
                            <span className={css(styles.linText)}>Lorem ipsum dolor sit amet, consectetur.</span>
                        </div>
                        <h1 className={css(styles.biggestText)}>Goal<br />Boost</h1>
                        <p className={css(styles.allText)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className={css(styles.button)} onClick={this._toggle}>BOOST</button>
                    </div>
                    <div className={css(styles.verticalIndication)}>
                        <span className={css(styles.linText)} style={{ paddingRight: 15 }}>PAYDAY ADVANCE</span>
                        <LineComponent width={200} />
                    </div>
                </div>
            </div >
        );
    }
}

const LineComponent = (props) => <div className={css(styles.line)} style={{ width: props.width }}></div>

LineComponent.defaultProps = {
    width: 100
}

export default Home;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.OFF_BLACK,
        color: COLORS.WHITE,
        minWidth: window.innerWidth,
        minHeight: window.innerHeight,
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftContent: {
        display: "flex",
        flex: 1,
        justifyContent: 'flex-end',
        paddingRight: 50
    },
    leftImage: {
        width: 400,
        height: 500
    },
    rightContent: {
        paddingLeft: 50,
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    line: {
        height: 1,
        backgroundColor: COLORS.WHITE
    },
    linText: {
        marginLeft: 10,
        color: COLORS.WHITE,
        fontSize: 16,
        fontWeight: 400
    },
    biggestText: {
        color: COLORS.WHITE,
        fontSize: 140,
        fontWeight: 600,
        margin: 0
    },
    allText: {
        width: 500,
        color: COLORS.WHITE,
        fontSize: 13,
        fontWeight: 400,
        marginTop: 20,
        marginBottom: 20
    },
    button: {
        borderWidth: 1,
        borderRadius: 25,
        height: 50,
        width: 150,
        borderColor: COLORS.GREY,
        color: COLORS.WHITE,
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: COLORS.OFF_BLACK,
        outline: 'none'
    },
    verticalIndication: {
        position: 'fixed',
        left: -130,
        bottom: 200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        transform: 'rotate(-90deg)'
    }
})