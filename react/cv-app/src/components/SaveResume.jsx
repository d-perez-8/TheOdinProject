import { jsPDF } from 'jspdf';

export default function SaveResume() {
    const generatePDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'letter',
            compress: true,
        });
        doc.html(document.getElementById('resume'), {
            callback: function(doc) {
                doc.save('resume.pdf');
            }
        })
    }

    return(
        <div className='flex justify-end mr-4'>
            <button className='text-white px-4' onClick={generatePDF}>Download</button>
        </div>
    )
}