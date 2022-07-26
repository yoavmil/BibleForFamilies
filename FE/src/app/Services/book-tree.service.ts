import { Injectable } from '@angular/core';

export interface BookNode {
  name: string;
  link?: string;
  children?: BookNode[];
}

@Injectable({
  providedIn: 'root'
})
export class BookTreeService {
  public bookData: BookNode[] = [
    {
      name: 'יהושע',
      link: 'Yehoshua'
    },
    {
      name: 'שופטים',
      children: [
        {
          name: 'מגילת רות',
        },
      ],
    },
    {
      name: 'שמואל א+ב',
      children: [{ name: 'תהלים' }],
    },
    {
      name: 'מלכים א+ב',

      children: [
        { name: 'יונה' },
        { name: 'עמוס' },
        { name: 'דברי הימים' },
        { name: 'ישעיה' }
      ],
    },
    {
      name: 'ירמיה',
      children: [
        { name: 'מגילת איכה' }
      ]
    },
    { name: 'יחזקאל' },
    { name: 'דניאל' },
    {
      name: 'שיבת ציון',
      children: [
        {
          name: 'עזרא',
        },
        {
          name: 'מגילת אסתר',
        },
        {
          name: 'חגי',
        },
        {
          name: 'זכריה',
        },
        {
          name: 'נחמיה',
        },
        {
          name: 'מלאכי',
        },
      ],
    },
  ];
}
