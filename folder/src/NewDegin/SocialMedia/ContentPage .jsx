import { useEffect, useState } from 'react';

const ContentPage = () => {
    const [degin, setDegin] = useState('');

    useEffect(() => {
        // Simulate fetching the degin content from the backend
        // You can replace this with your actual implementation to fetch the degin content if needed
        const fetchDeginContent = async () => {
            const response = await fetch('http://localhost:8080/api/get-degin-content');
            const data = await response.text();
            setDegin(data);
        };

        fetchDeginContent();
    }, []);

    return (
        <div>
            <h1>Content Page</h1>
            {/* Render the degin content */}
            <div dangerouslySetInnerHTML={{ __html: degin }} />
        </div>
    );
};

export default ContentPage;
