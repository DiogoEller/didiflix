import React from 'react';

function ButtonLink(props) {
    // props => { teste }

    return (
        <a href={props.href} className={props.className}>
        Novo Vídeo
        </a>
    );
}

export default ButtonLink;