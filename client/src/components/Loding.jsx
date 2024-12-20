
import {InfinitySpin} from "react-loader-spinner"
// Loading componenti, sayfa yüklenirken gösterilecek bir spinner animasyonu render eder
const Loading = () => {
  return (
    <div className="flex items-center justify-center my-12">
      
      <InfinitySpin
        visible={true}
        width="200"
        color="#4b0097"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default Loading