import './App.css';
import react from 'react';

import Primeiro  from './components/Primeiro';
import ComParamentro from './components/ComParamentro';
import Comfilhos from './components/Comfilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';

export default (props) => (
    <div className='App'>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
        <Comfilhos>
            <ul>
                <li>Ana</li>
                <li>Carlos</li>
                <li>Bia</li>
                <li>Jorge</li>
                <li>Daniel</li>
            </ul>
        </Comfilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parametro">
            <ComParamentro titulo="Esse é o titulo"
                subtitulo="Esse é o subtitulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    
        {/*<Primeiro />*/}
    </div>
);