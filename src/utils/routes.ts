import { IRoutesLayout } from 'interfaces/routes.interface';

const headerMenu: IRoutesLayout[] = [
  {
    title: 'О Нас',
    url: 'about'
  },
  {
    title: 'Техника',
    url: 'appliances'
  },
  {
    title: 'Автомобили',
    url: 'cars'
  },
  {
    title: 'Недвижимость',
    url: 'real-estate'
  },
  {
    title: 'Победители',
    url: 'winners'
  }
];

const footerMenu: IRoutesLayout[] = [
  {
    title: 'О Нас',
    url: 'about'
  },
  {
    title: 'Текущие розыгрыши',
    url: 'current-draws'
  },
  {
    title: 'Условия использования',
    url: 'term-of-uses'
  },
  {
    title: 'Пресс центр',
    url: 'press-center'
  },
  {
    title: 'Прошедшие розыгрыши',
    url: 'past-draws'
  },
  {
    title: 'Поддержка',
    url: 'support'
  }
];

export { headerMenu, footerMenu };
