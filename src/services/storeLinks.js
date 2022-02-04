
// buscar links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks)||[];

    return linksSaves;
}

//salvar links no storage

export async function saveLinks(key, newLinks) {
    let linksStored = await getLinksSave(key);

    const hasLinks = linksStored.some(link => link.id === newLinks.id);

    if (hasLinks) {
        console.log('ESSE LINK JA ESTA SALVO')
        return;
    }

    linksStored.push(newLinks);
    await localStorage.setItem(key, JSON.stringify(linksStored));           
    console.log('LINK SALVO COM SUCESSO!');

}

//deletar link salvos

export function deleteLink(links, id) {

    let myLinks = links.filter(item=>{
        return (item.id !== id)
    })

    localStorage.setItem('@Link', JSON.stringify(myLinks));
    console.log('DELEte')

    return myLinks;

}