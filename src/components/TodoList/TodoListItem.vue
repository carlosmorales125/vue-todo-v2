<template>
    <div class="column">
        <div class="card">
            <div class="card-content">
                <p class="title">
                    <slot></slot>
                </p>
            </div>
            <footer class="card-footer">
                <a href="#"
                   class="card-footer-item"
                   @click="Edit"
                >
                    Edit
                </a>
                <a href="#"
                   class="card-footer-item"
                   @click="Complete"
                >
                    Complete
                </a>
                <a href="#"
                   class="card-footer-item"
                   @click="Delete"
                >
                    Delete
                </a>
            </footer>
        </div>
    </div>
</template>
<script>
    import { EventBus } from '../../event-bus';

    export default {
        name: 'todolistitem',
        props: {
            itemId: Number
        },
        methods: {
            Edit() {
                // this will need a little more attention.
                // I need to create a form element that takes
                // the new description
                EventBus.$emit('editTask', this.itemId);
            },
            Complete() {
                EventBus.$emit('completeTask', this.itemId);
            },
            Delete() {
                EventBus.$emit('deleteTask', this.itemId);
            }
        },
    };
</script>
<style>

</style>
