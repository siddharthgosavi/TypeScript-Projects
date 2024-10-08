// Component base class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(templateID: string, hostElementID: string, insertAtStart: boolean, newElementID?: string) {
    this.templateElement = document.getElementById(templateID)! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementID)! as T;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstChild?.nextSibling as U;
    if (newElementID) {
      this.element.id = newElementID;
    }
    this.render(insertAtStart);
  }

  private render(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element);
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
