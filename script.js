function gerarTreino() {
    const objetivos = document.getElementById('objetivos').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const imc = document.getElementById('imc').value;

    const treino = `
        <h3>Seu Treino Personalizado</h3>
        <p><strong>Objetivos:</strong> ${objetivos}</p>
        <p><strong>Altura:</strong> ${altura} cm</p>
        <p><strong>Peso Atual:</strong> ${peso} kg</p>
        <p><strong>IMC:</strong> ${imc}</p>
        <p><strong>Recomendação:</strong> Baseado nas suas informações, recomendamos um treino de força e resistência com foco em ${objetivos}.</p>
    `;

    document.getElementById('resultado-treino').innerHTML = treino;
}