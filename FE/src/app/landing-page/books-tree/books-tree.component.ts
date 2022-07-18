import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface BookNode {
  name: string;
  children?: BookNode[];
}
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-books-tree',
  templateUrl: './books-tree.component.html',
  styleUrls: ['./books-tree.component.css'],
})
export class BooksTreeComponent {
  bookData: BookNode[] = [
    {
      name: 'יהושע',
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
    { name: 'ירמיה' },
    { name: 'יחזקאל' },
    { name: 'דניאל' },
    {
      name: 'שיבת ציון',
      children: [
        {
          name: 'עזרא',
        },
        {
          name: 'נחמיה',
        },
        {
          name: 'חגי',
        },
        {
          name: 'זכריה',
        },
        {
          name: 'מלאכי',
        },
      ],
    },
  ];

  constructor() {
    this.dataSource.data = this.bookData;
  }
  private _transformer = (node: BookNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: FlatNode) => node.expandable;
}
