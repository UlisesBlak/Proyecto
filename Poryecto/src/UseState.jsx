import React, { useState, useEffect, useRef } from 'react';
import './Animaciones.css'

const AnimationExample = () => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '2vw',
        marginBottom: '2vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const textWithDelayStyle = {
        animation: 'fadeIn 1s ease-in-out 0.5s forwards',
    };

    const expandingBoxStyle = {
        width: isHovered ? '200px' : '50px',
        height: isHovered ? '200px' : '50px',
        borderRadius: isHovered ? '0' : '8px',
        background: 'lightblue',
        transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out, border-radius 0.5s ease-in-out',
    };

    return (
        <div style={cardStyle}>
            <h3>Animaciones</h3>

            <div className="timid-element" style={{ marginBottom: '1em' }}>
                Soy tímido
            </div>

            <div style={{ ...textWithDelayStyle, marginBottom: '1em' }}>
                <div>
                    <h2>Elemento 1: La Danza de las Estrellas</h2>
                    En el vasto lienzo del firmamento, las estrellas entrelazan sus destellos en una danza cósmica, pintando historias milenarias que solo los ojos curiosos pueden descifrar. Cada parpadeo es una nota en la sinfonía celestial, una coreografía eterna que despierta la imaginación y transporta los sueños más allá de la galaxia.
                    <h2>Elemento 2: El Susurro del Bosque Encantado</h2>
                    En lo profundo del bosque, donde la luz se filtra entre las hojas como hilos dorados, se escucha un susurro mágico. Los árboles antiguos comparten secretos con el viento, y las criaturas místicas danzan en la penumbra. El bosque encantado guarda sus misterios con celo, invitando a aquellos con corazones curiosos a sumergirse en su encanto.
                    <h2>Elemento 3: El Eco de las Olas en la Playa Desierta</h2>
                    En la playa desierta, donde la arena se extiende como un lienzo infinito, el eco de las olas susurra historias de navegantes olvidados y tesoros perdidos en los abismos marinos. Cada ola es un suspiro del océano, llevando consigo la esencia de mundos lejanos y horizontes inexplorados.
                    <h2>Elemento 4: El Resplandor del Amanecer en la Montaña Soñadora</h2>
                    En la cima de la montaña soñadora, el sol se eleva con una promesa de nuevos comienzos. Sus rayos dorados pintan los picos nevados con tonalidades cálidas, iluminando valles silenciosos y despertando la vida que yace en la majestuosidad de la altitud. El resplandor del amanecer es un himno a la esperanza que cada día renace.
                    <h2>Elemento 5: El Baile de los Colores en el Jardín Efímero</h2>
                    En el jardín efímero, las flores bailan al compás del viento, desplegando una paleta de colores que deslumbran los sentidos. Cada pétalo es un lienzo vibrante en esta danza efímera, donde la fragancia embriaga y la belleza florece solo para desvanecerse, dejando un recuerdo en la memoria de quienes se aventuran a contempl
                </div>
            </div>

            <div
                style={expandingBoxStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            ></div>
        </div>
    );
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const RandomColorButtons = () => {
    const divRef = useRef(null);
    const [buttonColors, setButtonColors] = useState(Array.from({ length: 10 }, () => getRandomColor()));
    const [currentColor, setCurrentColor] = useState('');

    const changeColor = () => {
        if (divRef.current && currentColor) {
            divRef.current.style.backgroundColor = currentColor;
        }
    };

    const handleButtonClick = (color) => {
        setCurrentColor(color);
        changeColor();
    };

    return (
        <div>
            {buttonColors.map((color, index) => (
                <button key={index} onClick={() => handleButtonClick(color)} style={{ backgroundColor: color, color: '#fff' }}>
                    {color}
                </button>
            ))}
            <div ref={divRef} style={{ width: '200px', height: '200px', marginTop: '20px', border: '1px solid #000' }}>
                Colores Random UWU
                *Debe clickear doble vez
            </div>
        </div>
    );
};



const RandomColorCard = () => {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '2vw',
        marginBottom: '2vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={cardStyle}>
            <h3>UseRef</h3>
            <RandomColorButtons />
        </div>
    );
};

const UseState = () => {
    const [items, setItems] = useState([]);

    const handleAddButton = () => {
        const newItem = {
            id: items.length,
            colorChanged: false,
        };

        setItems([...items, newItem]);
    };

    const handleRemoveButton = () => {
        if (items.length === 0) return;

        const updatedItems = [...items];
        updatedItems.pop();
        setItems(updatedItems);
    };

    const handleRemoveAllButton = () => {
        setItems([]);
    };

    const handleColorChange = (id) => {
        const updatedItems = [...items];
        const item = updatedItems.find((item) => item.id === id);

        if (item) {
            item.colorChanged = !item.colorChanged;
            setItems(updatedItems);
        }
    };

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '2vw',
        marginBottom: '2vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const squareStyle = {
        width: '20vw',
        height: '20vw',
        margin: '2vw',
        display: 'inline-block',
    };

    const buttonContainerStyle = {
        marginTop: '2vw',
    };

    return (
        <div style={cardStyle}>
            <h3>UseState</h3>

            <div style={buttonContainerStyle}>
                <button onClick={handleAddButton}>AddButton</button>
                <button onClick={handleRemoveAllButton}>RemoveAllButton</button>
                <button onClick={handleRemoveButton}>RemoveButton</button>
            </div>

            {items.map((item) => (
                <div key={item.id} style={squareStyle}>
                    <div
                        style={{
                            backgroundColor: item.colorChanged ? 'red' : 'lightblue',
                            width: '100%',
                            height: '0',
                            paddingBottom: '100%',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    ></div>
                    <button onClick={() => handleColorChange(item.id)}>
                        Botón {item.id}
                    </button>
                </div>
            ))}


        </div>
    );
};

const FetchExample = () => {
    const [photoId, setPhotoId] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPhotos([data]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, [photoId]);

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '2vw',
        marginBottom: '2vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const imageStyle = {
        width: '30vw',
        height: '30vw',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginRight: '2vw',
    };

    const largeImageStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const mediaQueryStyle = {
        '@media (max-width: 640px)': {
            imageStyle: {
                width: '80vw',
                height: '80vw',
                marginRight: '0',
            },
            largeImageStyle: {
                width: '80vw',
            },
        },
    };

    return (
        <div style={cardStyle}>
            <h3>UseEffect</h3>
            <div>
                <label htmlFor="photoId">Enter Photo ID: </label>
                <input
                    type="number"
                    id="photoId"
                    value={photoId}
                    onChange={(e) => setPhotoId(parseInt(e.target.value))}
                />
                <button onClick={() => setPhotoId(photoId + 1)}>Next Photo</button>
            </div>
            <div>
                <h4>Photo Information</h4>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    photos.map((photo) => (
                        <div key={photo.id}>
                            <p><strong>ID:</strong> {photo.id}</p>
                            <p><strong>Title:</strong> {photo.title}</p>
                            <p><strong>URL:</strong> {photo.url}</p>
                            <div>
                                <img
                                    src={photo.thumbnailUrl}
                                    alt={`Thumbnail ${photo.id}`}
                                    style={{ ...imageStyle, ...mediaQueryStyle.imageStyle }}
                                />
                                <img
                                    src={photo.url}
                                    alt={`Large Image ${photo.id}`}
                                    style={{ ...largeImageStyle, ...mediaQueryStyle.largeImageStyle }}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export { UseState, FetchExample, RandomColorButtons, RandomColorCard, AnimationExample };
