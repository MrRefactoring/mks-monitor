import { makeAutoObservable, observable, set } from 'mobx';
import { Job } from '@interfaces';
import { Service } from 'typedi';

@Service()
export class JobsStore {
  @observable activeJobs: Job[] = [];
  allJobs: Job[] = [];

  constructor() {
    makeAutoObservable(this);

    this.activeJobs = [{
      id: 11,
      name: 'some.gcode',
      displayName: 'It is display name',
      complete: 49,
    }];
  }

  setJobDisplayName(jobId: number, name: string) {
    const job = this.getJobById(jobId);

    if (job) {
      set(job, 'displayName', name);
    }
  }

  getJobById(id: number): Job | null {
    return [...this.activeJobs, ...this.allJobs].find((job) => job.id === id) ?? null;
  }
}
