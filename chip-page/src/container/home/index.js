import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { COLORS } from '../../utils/config';
import Header from './header';
import './animate.css'

import activeImg from '../../asset/ActiveGoal_Card.png'
import doneImg from '../../asset/DoneCard.png'
import backgroundImage from '../../asset/ChipX_Background.png'
import blueEllips from '../../asset/Ellipses_Blue.png'
import salmonEllips from '../../asset/Ellipses_Salmon.png'

const animateDuration = 1000;

class Home extends Component {
    animatedStyle = `${css(styles.leftImage)} css-animate-img`
    normalStyle = css(styles.leftImage)
    normalEllipseStyle = `${css(styles.ellipsContainer)} css-animate-ellipse-hide`
    animatedEllipseStyle = `${css(styles.ellipsContainer)} css-animate-ellipse`
    timeout = undefined;
    state = {
        isActive: true,
        leftImageStyle: this.normalStyle,
        ellipseStyle: this.normalEllipseStyle
    }

    _toggle = () => {
        if (this.timeout) {
            return;
        }
        let nextEllipsStyle = this.state.isActive ? this.animatedEllipseStyle : this.normalEllipseStyle;
        this.setState({ isActive: !this.state.isActive, leftImageStyle: this.animatedStyle, ellipseStyle: nextEllipsStyle })
        this.timeout = setTimeout(this._resetStyle, animateDuration)
    }

    _resetStyle = () => {
        this.setState({ leftImageStyle: this.normalStyle }, () => this.timeout = undefined)
    }

    _ellipsInlineStyle = (index) => {
        const unit = window.innerHeight < 700 ? 5 : 10;
        switch (index) {
            case 1:
                return { position: 'relative', left: unit, top: -unit }
            case 2:
                return { position: 'relative', left: 12 * unit, top: 3 * unit }
            case 3:
                return { position: 'relative', left: 25 * unit, top: -3 * unit }
            case 4:
                return { position: 'relative', left: 26 * unit, top: 3 * unit + 2 }
            case 5:
                return { position: 'relative', left: 3 * unit, top: 30 * unit }
            case 6:
                return { position: 'relative', left: 11 * unit, top: 25 * unit }
            case 7:
                return { position: 'relative', left: 22 * unit, top: 28 * unit }
        }
    }

    render() {
        const leftImageSrc = this.state.isActive ? activeImg : doneImg;
        return (
            <div className={css(styles.container)}>
                <Header />
                <div className={css(styles.content)}>
                    <div className={css(styles.leftContent)}>
                        <div className={this.state.ellipseStyle}>
                            <img className={css(styles.ellips)} style={this._ellipsInlineStyle(1)} src={blueEllips}></img>
                            <img className={css(styles.ellips)} style={this._ellipsInlineStyle(2)} src={salmonEllips}></img>
                            <img className={css(styles.ellips)} style={this._ellipsInlineStyle(3)} src={blueEllips}></img>
                            <img className={css(styles.ellips)} style={this._ellipsInlineStyle(4)} src={blueEllips}></img>
                            <img className={css(styles.ellips)} style={this._ellipsInlineStyle(5)} src={salmonEllips}></img>
                            <img className={css(styles.ellips)} style={this._ellipsInlineStyle(6)} src={blueEllips}></img>
                            <img className={css(styles.ellips)} style={this._ellipsInlineStyle(7)} src={salmonEllips}></img>
                        </div>
                        <div className={this.state.leftImageStyle} style={{ backgroundImage: "url(" + leftImageSrc + ")" }} />
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
        backgroundImage: "url(" + backgroundImage + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: COLORS.WHITE,
        minWidth: window.innerWidth,
        minHeight: window.innerHeight,
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    content: {
        display: "flex",
        "@media (max-width: 700px)": {
            flexDirection: 'column',
            alignItems: 'center',
        },
        "@media (min-width: 700px)": {
            flexDirection: 'row',
            justifyContent: 'center',
        }
    },
    leftContent: {
        display: "flex",
        flex: 1,
        "@media (max-width: 700px)": {
            justifyContent: 'center',
            flexDirection: 'column',
        },
        "@media (min-width: 700px)": {
            justifyContent: 'flex-end',
            paddingRight: 50,
        }
    },
    ellipsContainer: {
        width: 400,
        height: 500,
        position: 'absolute',
        zIndex: 9,
        "@media (max-width: 700px)": {
            top: '25%',
            left: '0%',
        },
        "@media (min-width: 700px)": {
            top: '30%',
            left: '10%',
        },
    },
    leftImage: {
        "@media (max-width: 700px)": {
            width: 300,
            height: 400,
        },
        "@media (min-width: 700px)": {
            width: 400,
            height: 500,
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        zIndex: 10
    },
    rightContent: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        textAlign: 'left',
        "@media (max-width: 700px)": {
            width: '90%',
            paddingTop: 30,
            paddingBottom: 50
        },
        "@media (min-width: 700px)": {
            paddingLeft: 50,
            alignItems: 'flex-start',
        },
    },
    line: {
        height: 1,
        backgroundColor: COLORS.WHITE,
        "@media (max-width: 700px)": {
            display: 'none',
        },
    },
    linText: {
        color: COLORS.WHITE,
        fontWeight: 400,
        "@media (max-width: 700px)": {
            fontSize: 14,
        },
        "@media (min-width: 700px)": {
            fontSize: 16,
            marginLeft: 10,
        },
    },
    biggestText: {
        color: COLORS.WHITE,
        fontWeight: 600,
        margin: 0,
        "@media (max-width: 700px)": {
            fontSize: 40,
        },
        "@media (min-width: 700px)": {
            fontSize: 140,
        },
    },
    allText: {
        color: COLORS.WHITE,
        fontSize: 13,
        fontWeight: 400,
        marginTop: 20,
        marginBottom: 20,
        "@media (max-width: 700px)": {
            width: 'auto',
        },
        "@media (min-width: 700px)": {
            width: 500,
        },
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
        transform: 'rotate(-90deg)',
        "@media (max-width: 700px)": {
            display: 'none'
        },
    },
    ellips: {
        height: 15,
        width: 15
    }
})