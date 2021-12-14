import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./post-list-item.css";

export default class PostListItem extends Component {
    render() {
        const { label, onDelete, onToggleLiked, onToggleImportent, important, like } = this.props;
        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }
        if (like) {
            classNames += " like";
        }

        return (
            <div className={classNames}>
                <span
                    onClick={onToggleLiked}
                    className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportent}>
                        <i className="bi bi-star-fill"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="bi bi-trash-fill"></i>
                    </button>
                    <i className="bi bi-suit-heart-fill"></i>
                </div>
            </div>
        )
    }
}
