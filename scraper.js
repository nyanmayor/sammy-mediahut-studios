import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://mediahutafrica.pixieset.com/weddings/weddings/', { waitUntil: 'networkidle2' });

  // Scroll down multiple times to trigger lazy loading
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await new Promise(r => setTimeout(r, 1000));
  }

  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => img.src || img.getAttribute('data-src')).filter(src => src && src.includes('images.pixieset.com') && src.includes('-large'));
  });

  fs.writeFileSync('pixieset_images.json', JSON.stringify([...new Set(images)], null, 2));
  console.log(`Found ${new Set(images).size} images.`);
  await browser.close();
})();
