'use client'

import MDEditor from '@uiw/react-md-editor'
import React from 'react'

function MdEditorMarkdown({source}: {source: string | undefined}) {
  return (
    <MDEditor.Markdown className='markdown-content' source={source} />
  )
}

export default MdEditorMarkdown