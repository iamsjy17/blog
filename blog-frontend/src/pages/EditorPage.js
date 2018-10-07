import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';
import EidtorHeaderContainer from 'containers/editor/EidtorHeaderContainer';

const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EidtorHeaderContainer />}
      editor={<EditorPaneContainer />}
      preview={<PreviewPaneContainer />}
    />
  );
};

export default EditorPage;
