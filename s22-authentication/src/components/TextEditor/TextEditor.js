import React, { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { ButtonGroup, Button } from 'react-bootstrap'
import 'draft-js/dist/Draft.css'

const TextEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    const editor = React.useRef()

    const focusEditor = () => {
        editor.current.focus()
    }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            setEditorState(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    React.useEffect(() => {
        focusEditor()
    }, [])

    const handleToggleClick = (e, inlineStyle) => {
        e.preventDefault()
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
    }

    return (
        <section className='starting editor'>
            <h1 className='cblue'>Editor</h1>

            <ButtonGroup className='mb-1'>
                <Button
                    variant='secondary'
                    onClick={(e) => handleToggleClick(e, 'BOLD')}>
                    <b>b</b>
                </Button>
                <Button
                    variant='secondary'
                    onClick={(e) => handleToggleClick(e, 'ITALIC')}>
                    <i>i</i>
                </Button>
                <Button
                    variant='secondary'
                    onClick={(e) => handleToggleClick(e, 'STRIKETHROUGH')}>
                    <span className='strike'>S</span>
                </Button>
                <Button
                    variant='secondary'
                    onClick={(e) => handleToggleClick(e, 'header-one')}>
                    H1
                </Button>
            </ButtonGroup>
            <div onClick={focusEditor}>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={(editorState) => setEditorState(editorState)}
                />
            </div>
            <p className='cwhite mt-3'>
                https://so99ynoodles.com/en/blog/make-wysiwyg-editor-with-draft-js
            </p>
        </section>
    )
}

export default TextEditor
