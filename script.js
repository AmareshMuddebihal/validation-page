async function validateCertificate() {
    const certificateId = document.getElementById('certificateId').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (certificateId.trim() === '') {
        resultDiv.innerHTML = 'Please enter a Certificate ID.';
        return;
    }

    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const certificate = data.find(cert => cert.id === certificateId);

        if (certificate) {
            resultDiv.innerHTML = `
                <h3>Certificate Details:</h3>
                <p><strong>Certificate ID:</strong> ${certificate.id}</p>
                <p><strong>Name:</strong> ${certificate.name}</p>
                <p><strong>Position:</strong> ${certificate.position}</p>
                <p><strong>Start Date:</strong> ${certificate.startDate}</p>
                <p><strong>End Date:</strong> ${certificate.endDate}</p>
            `;
        } else {
            resultDiv.innerHTML = 'Certificate not found.';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        resultDiv.innerHTML = 'An error occurred while validating the certificate.';
    }
}
