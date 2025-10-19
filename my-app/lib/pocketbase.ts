import PocketBase from 'pocketbase';
// For local dev
export const pb =  new PocketBase('https://bghit-nfhem.kittenshopping.com');

// Optional: load auth from localStorage (browser only)
if (typeof window !== 'undefined') {
    pb.authStore.loadFromCookie(document.cookie || '');
}

export default pb;
