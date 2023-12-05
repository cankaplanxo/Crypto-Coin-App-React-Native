// Api.js

const apiKey = 'c404aab0-02d4-41f6-8a74-84414c85b7c7';
const apiUrl = 'https://api.coincap.io/v2/assets';

const fetchData = () => {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            return data.data; // Sadece data.data'yı döndürerek gerekli veriyi alabilirsiniz.
        })
        .catch(error => {
            console.error('API Error:', error);
            throw error; // Hata durumunda hatayı tekrar fırlatın, böylece App.js'de bu hatayı işleyebilirsiniz.
        });
};

export default fetchData;
