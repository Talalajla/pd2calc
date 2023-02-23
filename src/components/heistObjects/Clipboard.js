import React from 'react';
import { CirclePick, Clip, ClipMetal, ClipPaper, ClipTitle, Difficulty, DiffLabel, DiffName, DiffRadio, DiffUnderScore, Normal, Skull, Skull2, Skull3, Skull4, Skulls } from '../../styles/heist-main';
import Underscore from "../../images/underscore.svg";

class ClipBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        }
    }

    nameSwitch = (e) => {
        this.setState({ name: e.target.dataset.diff });
        this.props.limit(e.target.dataset.diff);
    }

    render() {
        return (
            <Clip>
                <ClipMetal />
                <ClipPaper>
                    <ClipTitle>Difficulty</ClipTitle>
                    <Difficulty onChange={this.nameSwitch}>
                        <DiffLabel>
                            <DiffRadio data-diff="Normal" value="0" required />
                            <CirclePick />
                            <Normal />
                        </DiffLabel>

                        <Skulls>
                            <DiffLabel>
                                <DiffRadio data-diff="Hard" value="2" />
                                <CirclePick />
                                <Skull />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Very Hard" value="5" />
                                <CirclePick />
                                <Skull />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Overkill" value="10" />
                                <CirclePick />
                                <Skull />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Mayhem" value="11.5" />
                                <CirclePick />
                                <Skull2 />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Death Wish" value="13" />
                                <CirclePick />
                                <Skull3 />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Death Sentence" value="14" />
                                <CirclePick />
                                <Skull4 />
                            </DiffLabel>
                        </Skulls>
                    </Difficulty>
                    <DiffName font={this.state.name === "Death Sentence" ? "smaller" : null}>
                        {this.state.name}
                        <DiffUnderScore src={Underscore} alt="Underscore" lower={this.state.name === "Death Sentence" ? "lower" : null} />
                    </DiffName>
                </ClipPaper>
            </Clip>
        );
    }
}

export default ClipBoard;