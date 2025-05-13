// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('My event')
    .items([
      //När jag lägger till en event här måste jag lägga in det i brackets nedan för så den sorteras bort från listan
      S.documentTypeListItem('event').title('Events'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        //Här
        (item) => item.getId() && !['event'].includes(item.getId()),
      ),
    ])
