import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Item, SubItem, ItemWrapper, HomeTitle, HomeText, CardsWrapper, DescriptionTitle, DescriptionSubtitles, OtherInfoWrapper } from './HomeStyles';
import { DescriptionContainer } from '../generic-page/GenericStyles';
import { Link } from 'react-router-dom';
import Cards from '../Cards';
import Calendar from '../Calendar/Calendar';

const Home: React.FunctionComponent<{}> = ({ }) => {
    return (
        <>
            <ItemWrapper>
                <div>
                    <DescriptionContainer>
                        <HomeTitle>
                            ¡Te damos la bienvenida a Trocafone!
                        </HomeTitle>
                        <HomeText>
                            Preparamos este material con el objetivo de apoyarte en tus primeros pasos junto al equipo. Queremos que conozcas nuestra historia, nuestros valores y, especialmente, nuestra gente y hacerte sentir parte de este equipo desde tu primer día. Además de esta guía, podrás contar con el apoyo y amistad de todos, que (por ahora) están a un mensaje de distancia. :)
                        </HomeText>
                    </DescriptionContainer>
                </div>
                <img src="https://i.imgur.com/trDY9NT.png" />
            </ItemWrapper>

            <DescriptionTitle> Dias previos</DescriptionTitle>
            <DescriptionSubtitles>RRHH se pondra en contacto y revisaran los siguientes temas:</DescriptionSubtitles>
            <CardsWrapper>
                <Cards order={1} text={"Vas a tener que hacerte el preocupacional."} img={"https://i.imgur.com/72Dzb0a.png"}></Cards>
                <Cards order={2} text={"En turecibo.com vas a tener que completar y firmar algunos documentos"} img={"https://i.imgur.com/puh97vP.png"}></Cards>
                <Cards order={3} text={"Nos vas a mandar una foto tuya y completar el formulario de presentación :)"} img={"https://i.imgur.com/w8HMNx2.png"}></Cards>
            </CardsWrapper>

            <DescriptionTitle> Kit de bienvenida</DescriptionTitle>
            <DescriptionSubtitles>Tu primer día te van a mandar los elementos de trabajo que son necesarios para tu día a día.</DescriptionSubtitles>
            <img src="https://i.imgur.com/yGXlTGI.png" />
            <DescriptionTitle> Primeros días en Trocafone</DescriptionTitle>
            <DescriptionSubtitles>Tu primer día te van a mandar los elementos de trabajo que son necesarios para tu día a día.</DescriptionSubtitles>
            <Calendar></Calendar>
            <DescriptionTitle> Primer semana</DescriptionTitle>
            <DescriptionSubtitles>Sabemos que es un montón de información en estos primeros días y <br></br>la primer semana está para adaptarse. Cualquier duda que tengas <br></br> podés hablar con RRHH o cualquier miembro del equipo.</DescriptionSubtitles>
            <img src="https://i.imgur.com/FKRJKZ7.png" />
            <OtherInfoWrapper>
                <DescriptionTitle> Otras informaciones</DescriptionTitle>
                <DescriptionSubtitles>Ahora que ya transitaste estos primeros pasos tenemos más <br></br>información para que puedas revisar sobre Trocafone.</DescriptionSubtitles>
            </OtherInfoWrapper>


        </>
    )
}

export default Home