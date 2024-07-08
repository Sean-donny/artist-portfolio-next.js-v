interface ProjectDataItem {
  src: string;
  alt: string;
  title: string;
  year: string;
  style: string;
  navigate: string;
  width: number;
  height: number;
}

interface ProjectData {
  [key: string]: ProjectDataItem;
}

export default ProjectData;
