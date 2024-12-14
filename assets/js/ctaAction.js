export default function openCTALink() {
    const url = `https://api.whatsapp.com/send?phone=6285777766896&text=Halo%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20mengenai%20layanan%20dari%20Agen%20Pekerja%20Indonesia%20(API).%20Bisa%20bantu%20saya%20untuk%20konsultasi%20lebih%20lanjut%3F%C2%A0Terima%C2%A0kasih.`
    document.querySelectorAll('.cta-action').forEach((cta) => {
        cta.addEventListener('click', function () {
            window.open(url, '_blank');
        });
    });
}