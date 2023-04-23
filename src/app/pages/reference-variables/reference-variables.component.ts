import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export enum BackgroundColorEnum  {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
}


@Component({
  selector: 'app-reference-variables',
  templateUrl: './reference-variables.component.html',
  styleUrls: ['./reference-variables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferenceVariablesComponent {
  @ViewChild('text') text: ElementRef | undefined;
  @ViewChild('textarea') textarea: ElementRef | undefined;
  @ViewChild('input') input: ElementRef | undefined;
  @ViewChild('title') title: ElementRef | undefined;
  @ViewChild('image') image: ElementRef | undefined;

  onRemoveValue(): void {
    // @ts-ignore
    this.text?.nativeElement.innerText = '';
    // @ts-ignore
    this.text?.nativeElement.backgroundColor = '';
    // @ts-ignore
    this.textarea?.nativeElement.value = '';
    // @ts-ignore
    this.textarea?.nativeElement.backgroundColor = '';
    // @ts-ignore
    this.input?.nativeElement.value = '';
    // @ts-ignore
    this.input?.nativeElement.backgroundColor = '';
    // @ts-ignore
    this.title?.nativeElement.innerText = '';
    // @ts-ignore
    this.title?.nativeElement.backgroundColor = '';

    // @ts-ignore
    this.image.nativeElement.src = '';
  }

  onAddText(): void {
    const inputText = this.input?.nativeElement.value;
    let titleText = this.title?.nativeElement;
    titleText.innerText = inputText;

    const textareaText = this.textarea?.nativeElement.value;

    // @ts-ignore
    this.text?.nativeElement.innerText = textareaText;

    // @ts-ignore
    this.image.nativeElement.src = 'https://picsum.photos/200/300';
  }

  onChangeBackground(): void {
    // @ts-ignore
    this.input?.nativeElement.style.backgroundColor = this._getRandomColor();
    // @ts-ignore
    this.textarea?.nativeElement.style.backgroundColor = this._getRandomColor();
    // @ts-ignore
    this.title?.nativeElement.style.backgroundColor = this._getRandomColor();
    // @ts-ignore
    this.text?.nativeElement.style.backgroundColor = this._getRandomColor();
    // @ts-ignore
    this.image.nativeElement.src = 'https://picsum.photos/200/300';
  }

  // getInstanceOf(element: unknown): boolean {
  //   return  element instanceof DirectiveExportAsComponent
  // }

  onDoSomething(): void {

  }

  private _getRandomColor(): BackgroundColorEnum {
    const colors = Object.values(BackgroundColorEnum);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
