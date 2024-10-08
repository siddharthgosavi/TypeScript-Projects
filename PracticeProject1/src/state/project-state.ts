import { Project, ProjectStatus } from "../models/project.js";

//Project State Managment class
type Listener<T> = (items: T[]) => void;

export class State<T> {
  protected listners: Listener<T>[] = [];

  addListner(listnerFn: Listener<T>) {
    this.listners.push(listnerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;
  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(Math.random().toString(), title, description, people, ProjectStatus.Active);
    this.projects.push(newProject);
    this.updateListners();
  }

  moveProject(id: string, newStatus: ProjectStatus) {
    const project = this.projects.find(prj => prj.id === id);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListners();
    }
  }

  private updateListners() {
    for (const listnerFn of this.listners) {
      listnerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
