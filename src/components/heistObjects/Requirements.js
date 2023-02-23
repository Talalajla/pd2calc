import React from 'react';
import { RequireNotes, Tape } from '../../styles/heist-main';
import { RCB, RS } from '../reqCheckbox';


const RequirementsRow = (props) => {
    const { row } = props;

    return (
        <tr>
            <td>{row[0]}</td>
            <td>{row[1] > 0 ? row[0].includes('Default') ? row[1] : `+${row[1]}` : row[1]}</td>
            <td>
                {row[2] === 'rCB' && row[0] === "Default (completion)" && <RCB default />}
                {row[2] === 'rCB' && row[0] !== "Default (completion)" && <RCB readonly={row[3] === 'readonly' ? true : null} />}
                {row[2] === 'rS' && <RS start={row[3]} limit={row[4]} />}
            </td>
        </tr>
    );
}

const Requirements = (props) => {

    return (
        <RequireNotes>
            <Tape>
                <table>
                    <tbody>
                        <tr>
                            <th>Requiremenets</th>
                            <th>EXP</th>
                            <th>Status</th>
                        </tr>
                        {props.requirements.map((item, index) => <RequirementsRow key={index} row={item} />)}

                        <tr><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
            </Tape>
        </RequireNotes>
    );
}

export default Requirements;