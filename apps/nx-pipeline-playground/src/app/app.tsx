import styled from 'styled-components';
import {UiLib} from "@nx-pipeline-playground/ui-lib"
import {UiLibSecond} from "@nx-pipeline-playground/ui-lib-second"

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <UiLib></UiLib>
      <UiLibSecond></UiLibSecond>
    </StyledApp>
  );
}

export default App;
