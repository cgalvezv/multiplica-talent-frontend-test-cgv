/**
 * Function that performs logical behavior of copying a text to the clipboard
 * @param text is the text to be copied
 * @author Camilo Gálvez Vidal
 */
export function copyToClipboard(text: string) {
    // simulated a textarea to simulate the action of copying, using native javascript
    // Getting in -> https://stackoverflow.com/questions/57854085/typescript-issue-to-copy-to-clip-board-different-result-for-chrome-and-mozill
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
}