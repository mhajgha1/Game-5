body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #6DD5FA, #FF758C);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.game-container {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    text-align: center;
    max-width: 800px;
    width: 95%;
}

h1 {
    color: #4a4a4a;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

#graph {
    margin-bottom: 20px;
}

.options {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.3s;
}

button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
}

#result, #slope {
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.2em;
    padding: 10px;
    border-radius: 10px;
}