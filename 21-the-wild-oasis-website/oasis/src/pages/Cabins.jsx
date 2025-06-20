import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / Sort</p>
      </Row>
      <Row type="horizontal">
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
