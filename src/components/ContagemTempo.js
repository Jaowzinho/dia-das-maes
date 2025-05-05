import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'; // Importando o Carousel do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const ContagemTempo = () => {
    const dataInicio = new Date('2007-12-21T00:00:00');
    const [tempo, setTempo] = useState('');

    const calcularTempo = () => {
        const agora = new Date();

        // Calcula anos completos
        let anos = agora.getFullYear() - dataInicio.getFullYear();
        const aniversarioEsteAno = new Date(agora.getFullYear(), dataInicio.getMonth(), dataInicio.getDate());

        if (agora < aniversarioEsteAno) {
            anos--; // Se ainda não fez aniversário esse ano, não completa mais um ano
        }

        // Calcula o último aniversário (em anos completos)
        const dataUltimoAniversario = new Date(dataInicio);
        dataUltimoAniversario.setFullYear(dataInicio.getFullYear() + anos);

        // Calcula os dias passados desde o último aniversário
        const tempoDesdeUltimoAniversario = agora - dataUltimoAniversario;
        const dias = Math.floor(tempoDesdeUltimoAniversario / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoDesdeUltimoAniversario % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoDesdeUltimoAniversario % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoDesdeUltimoAniversario % (1000 * 60)) / 1000);

        setTempo(`${anos} anos ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
    };

    useEffect(() => {
        const intervalo = setInterval(calcularTempo, 1000);
        calcularTempo(); // Calcular o tempo imediatamente ao carregar o componente

        return () => clearInterval(intervalo); // Limpar o intervalo quando o componente for desmontado
    }, []);



    return (
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
            {/* Carrossel no centro da tela */}
            <h1 className="titulo-cursivo">Feliz dia das Mães</h1>
            <div className="w-100 mb-5">
                <Carousel className="mx-auto" style={{ maxWidth: '400px' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/imagem1.jpeg"  // Caminho para a imagem 1
                            alt="Primeira imagem"
                            style={{
                                height: '500px', // Definindo altura fixa como em uma tela de celular
                                objectFit: 'cover', // Ajusta a imagem sem distorcer
                                borderRadius: '10px', // Bordas arredondadas para dar o visual de celular
                            }}
                        />
                        <Carousel.Caption>
                            <h3>Eu te amo mil milhões!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/imagem2.jpeg"  // Caminho para a imagem 2
                            alt="Segunda imagem"
                            style={{
                                height: '500px', // Definindo altura fixa
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <Carousel.Caption>
                            <h3>Você é minha luz!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/imagem3.jpeg"  // Caminho para a imagem 3
                            alt="Terceira imagem"
                            style={{
                                height: '500px', // Definindo altura fixa
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <Carousel.Caption>
                            <h3>i love you!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/imagem4.jpeg"  // Caminho para a imagem 4
                            alt="Quarta imagem"
                            style={{
                                height: '500px', // Definindo altura fixa
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <Carousel.Caption>
                            <h3>A melhor parte do meu dia!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/imagem5.jpeg"  // Caminho para a imagem 5
                            alt="Quinta imagem"
                            style={{
                                height: '500px', // Definindo altura fixa
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <Carousel.Caption>
                            <h3>Minha heroína sem capa</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/imagem6.jpg"  // Caminho para a imagem 6
                            alt="Sexta imagem"
                            style={{
                                height: '500px', // Definindo altura fixa
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <Carousel.Caption>
                            <h3>Eu te amo!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/imagem7.jpg"  // Caminho para a imagem 6
                            alt="Sexta imagem"
                            style={{
                                height: '500px', // Definindo altura fixa
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <Carousel.Caption>
                            <h3>Você merece o mundo, e muito mais.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Player do Spotify para a música "Te Esperando" do Luan Santana */}
            {/* Player do Spotify para a música "Como É Grande O Meu Amor Por Você" - Roberto Carlos */}
            <div className="spotify-frame">
                <h2>Música que dedico para você: 🤍</h2>
                <iframe
                    title="Spotify Music - Como É Grande O Meu Amor Por Você"
                    className="embed-responsive-item"
                    src="https://open.spotify.com/embed/track/1Kj2S2YdEgXJZp4OQHQ7hM?si=3abf1e0dc08241e6"  // Link da música "Como É Grande O Meu Amor Por Você"
                    width="300"
                    height="380"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>





            {/* Contagem de tempo com estilo personalizado */}
            <div className="contagem-container">
                <h2 className="contagem-titulo">A quanto tempo você é a minha mãe:</h2>
                <p className="contagem-texto">{tempo}</p>
            </div>



            {/* Mensagem final */}
            <div className="mensagem-final">
                <p>
                    🌷 <strong>Feliz Dia das Mães!</strong> 🌷
                    <br /><br />
                    Hoje, este site é só para você, mãe. Uma pequena homenagem para alguém imensamente importante.
                    <br /><br />
                    Entre todas as palavras do mundo, nenhuma seria suficiente para descrever tudo o que você representa. Você é amor que acolhe, força que inspira, sabedoria que guia. É colo nos dias difíceis, sorriso nos dias bons, e presença constante em todos os momentos.
                    <br /><br />
                    Este espaço foi criado para te lembrar do quanto você é especial, única e insubstituível. Para celebrar não só a mãe que você é, mas a mulher incrível que transforma tudo ao seu redor com carinho, coragem e dedicação.
                    <br /><br />
                    Obrigado por tudo, mãe. Por cada gesto de cuidado, por cada sacrifício silencioso, por cada palavra que me fez crescer.
                    <br />
                    Você é meu exemplo, meu orgulho, meu porto seguro.
                    <br /><br />
                    <strong>Este site é seu.</strong> Porque o amor que você dá merece ser eternizado.
                    <br /><br />
                    Com todo o meu carinho,
                    <br />
                    <strong>João Vitor 💖</strong>
                </p>
            </div>
        </div>
    );
};

export default ContagemTempo;
