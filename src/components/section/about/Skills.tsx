import { backEnd, frontEnd, graphics, toolsTech, } from "@/constants"
import styles from './about.module.css'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Skills = () => {
  return (
    <div className={styles.skillContainer}>
      <h3>Skills and Technologies</h3>

      {/* <div className={styles.skillContent}>
      </div> */}

      <div className="w-full flex justify-center items-start">
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="frontend" className="col-span-2">

            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">FRONTEND</TabsTrigger>
              {/* <TabsTrigger value="backend">BACKEND</TabsTrigger> */}
              <TabsTrigger value="graphics">GRAPHICS</TabsTrigger>
              <TabsTrigger value="tools">TOOLS</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <div className={styles.skillDiv}>
                <div className={styles.skillSection}>
                  {frontEnd.map((data, index) => (
                    <div key={index} className={styles.skillCard}>
                      {data.icon}
                      <p>{data.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* <TabsContent value="backend">
              <div className={styles.skillDiv}>
                <div className={styles.skillSection}>
                  {backEnd.map((data, index) => (
                    <div key={index} className={styles.skillCard}>
                      {data.icon}
                      <p>{data.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent> */}

            <TabsContent value="graphics">
              <div className={styles.skillDiv}>
                <div className={styles.skillSection}>
                  {graphics.map((data, index) => (
                    <div key={index} className={styles.skillCard}>
                      {data.icon}
                      <p>{data.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className={styles.skillDiv}>
                <div className={styles.skillSection}>
                  {toolsTech.map((data, index) => (
                    <div key={index} className={styles.skillCard}>
                      {data.icon}
                      <p>{data.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>


    </div>
  )
}

export default Skills