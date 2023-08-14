interface ProjectProps {
  key: string,
  name: string,
  logo: string,
  desc: string,
  site: string | null,
  stack: [
    { name: string,
      icon: string,
    }
  ]
}