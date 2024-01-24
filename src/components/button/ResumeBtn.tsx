import { ResumeBtnProps } from "@/types"
import Link from "next/link"

const ResumeBtn = ({classnames} : ResumeBtnProps) => {
  return (
    <Link href="/pdf/EZ_MICHAEL_YUCOR_CV.pdf"
      className={classnames}
      rel="noopener noreferrer" download>
      RESUME / CV
    </Link>
  )
}

export default ResumeBtn