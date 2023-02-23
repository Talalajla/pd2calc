import React from 'react';
import { InfiniteBox, InfiniteInput } from '../../styles/heist-main';

const Infinite = ({ limit }) => {

    return (
        <InfiniteBox>
            <div>
                <span>+</span><InfiniteInput min="0" max={limit} name="additional" />
            </div>
            <p>Additional bags</p>
        </InfiniteBox>
    );
}

export default Infinite;