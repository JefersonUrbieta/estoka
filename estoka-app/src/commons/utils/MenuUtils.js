export default class MenuUtils {

    static removeMenu(menuActions, title) {
        return menuActions.filter(menu => menu.name !== title)
    }
}
