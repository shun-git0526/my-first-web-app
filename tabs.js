// ここからコードを書いてください
const setupTabs = () => {
    const homeLink = document.querySelector('[data-tab="home"]');
    const converterLink = document.querySelector('[data-tab="converter"]');
    const homeSection = document.querySelector('#home');
    const converterSection = document.querySelector('#converter');
    
    // 初期状態: homeを表示、converterを隠す
    // homeSection.classList.remove('hidden');
    // converterSection.classList.add('hidden');
    
    homeLink.addEventListener('click', () => {
        homeSection.classList.remove('hidden');
        converterSection.classList.add('hidden');
    });
    
    converterLink.addEventListener('click', () => {
        converterSection.classList.remove('hidden');
        homeSection.classList.add('hidden');
    });
}
export default setupTabs;