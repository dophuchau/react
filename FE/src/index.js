import React from 'react' // nạp thư viện react
import { createRoot } from 'react-dom/client' // nạp createRoot từ react-dom/client

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
        </div>
    )
}

// Lấy phần tử DOM #root
const container = document.getElementById('root');
// Tạo root mới sử dụng createRoot
const root = createRoot(container);

// Render component App vào root mới
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
