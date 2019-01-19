<template>
    <div class="column">
        <div class="card">
            <div class="card-content" v-if="editing">
                <input class="input"
                       type="text"
                       v-model="localDescription"
                       @keyup.prevent.enter="DoneEditing"
                >
            </div>
            <div class="card-content" v-else>
                <p class="title" >
                    <slot></slot>
                </p>
            </div>
            <footer class="card-footer">
                <a href="#"
                   class="card-footer-item"
                   @click.prevent="editWorkflow"
                >
                    {{ editOrDoneText }}
                </a>
                <a href="#"
                   class="card-footer-item"
                   @click.prevent="CompleteOrRestore"
                >
                    {{ completeOrRestoreText }}
                </a>
                <a href="#"
                   class="card-footer-item"
                   @click.prevent="Delete"
                >
                    Delete
                </a>
            </footer>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'todolistitem',
        props: {
            description: String,
            itemId: String,
            complete: Boolean,
        },
        methods: {
            ...mapActions({
                editTask: 'editTask',
                deleteTask: 'deleteTask',
                completeOrRestoreTask: 'completeOrRestoreTask',
            }),
            Edit() {
                this.editing = true;
            },
            DoneEditing() {
                this.editTask({
                    userId: this.userId,
                    id: this.itemId,
                    description: this.localDescription,
                });
                this.editing = false;
            },
            CompleteOrRestore() {
                this.completeOrRestoreTask({
                    userId: this.userId,
                    id: this.itemId,
                    done: !this.complete
                });
            },
            Delete() {
                this.deleteTask(this.itemId);
            },
            editWorkflow() {
                return this.editing ? this.DoneEditing() : this.Edit();
            },
        },
        data() {
            return {
                editing: false,
                localDescription: this.description,
            }
        },
        computed: {
            completeOrRestoreText() {
                return this.complete ? 'Restore' : 'Complete';
            },
            editOrDoneText() {
                return this.editing ? 'Done' : 'Edit';
            },
            ...mapState({
                userId: state => state.profile.user.id
            }),
        },
    };
</script>
<style>

</style>
