<template>
    <div class="profile-item">
        <div class="field">
            <label class="label">{{ labelText }}</label>
        </div>
        <div class="field is-grouped">
            <div class="control input-or-content" v-if="editing">
                <input class="input"
                       :type="inputType"
                       :placeholder="localItemText"
                       v-model="localItemText"
                >
            </div>
            <div class="control input-or-content" v-else>
                <div class="content">
                    <div class="title is-3">{{ localItemText }}</div>
                </div>
            </div>
            <div class="control">
                <button class="button is-primary"
                   href="#"
                   @click.prevent="editWorkflowTest"
                >
                    {{ editOrDoneText }}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'profileitem',
        props: {
            labelText: String,
            currentValue: String,
            inputType: String,
            stateUpdateMethod: Function,
        },
        data() {
            return {
                editing: false,
                localItemText: this.currentValue
            };
        },
        methods: {
            Edit() {
                this.editing = true;
            },
            DoneEditing() {
                this.editing = false;
                this.stateUpdateMethod({
                    id: this.id,
                    description: this.localItemText,
                });
            },
            editWorkflowTest() {
                return this.editing ? this.DoneEditing() : this.Edit();
            },
        },
        computed: {
            editOrDoneText() {
                return this.editing ? 'Done' : 'Edit';
            },
            ...mapState({
                id: state => state.profile.user.id
            }),
        },
    };
</script>
<style scoped>
    .profile-item {
        margin-bottom: 10px;
    }
    .profile-item .field {
        margin-bottom: 0;
    }
    .input-or-content {
        flex: 1;
    }
</style>
