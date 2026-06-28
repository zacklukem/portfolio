<script setup lang="ts">
import { EditorView, basicSetup } from "codemirror";
import { githubDark } from "@fsegurai/codemirror-theme-github-dark";
import { cpp } from "@codemirror/lang-cpp";
import { vim } from "@replit/codemirror-vim";
import { ViewPlugin, ViewUpdate, type PluginValue } from "@codemirror/view";

const parent = useTemplateRef("parent");

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

let editorView: EditorView;

onMounted(() => {
  let baseTheme = EditorView.baseTheme({
    "&": {
      backgroundColor: "var(--zlm-bg-dark-color) !important",
      flex: 1,
    },
    ".cm-gutters": {
      backgroundColor: "var(--zlm-bg-dark-color) !important",
    },
  });

  editorView = new EditorView({
    parent: parent.value!,
    doc: props.modelValue,
    extensions: [
      ViewPlugin.fromClass(
        class implements PluginValue {
          constructor() {}

          update(update?: ViewUpdate) {
            if (update?.docChanged) {
              const value = update.state.doc.toString();
              emit("update:modelValue", value);
            }
          }
        },
      ),
      vim(),
      basicSetup,
      githubDark,
      baseTheme,
      cpp(),
    ],
  });
});

// watch(
//   () => props.modelValue,
//   () => {
//     if (!editorView) return;
//     editorView.dispatch({
//       changes: {
//         from: 0,
//         to: editorView.state.doc.length,
//         insert: props.modelValue,
//       },
//     });
//   },
// );
</script>

<template>
  <div ref="parent" class="editor-container" />
</template>

<style scoped lang="scss">
.editor-container {
  display: flex;
  height: 400px;
}
</style>
